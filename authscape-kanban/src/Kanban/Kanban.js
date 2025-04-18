import React, {useCallback, useEffect, useRef, useState} from 'react';
import {createPortal, unstable_batchedUpdates} from 'react-dom';
import {
  CancelDrop,
  closestCenter,
  pointerWithin,
  rectIntersection,
  CollisionDetection,
  DndContext,
  DragOverlay,
  DropAnimation,
  getFirstCollision,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  Modifiers,
  useDroppable,
  UniqueIdentifier,
  useSensors,
  useSensor,
  MeasuringStrategy,
  KeyboardCoordinateGetter,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
  AnimateLayoutChanges,
  SortableContext,
  useSortable,
  arrayMove,
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
  SortingStrategy,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { apiService } from 'authscape';

/// use in testing
// import {coordinateGetter as multipleContainersCoordinateGetter} from './multipleContainersKeyboardCoordinates';
// import { Item } from './item';
// import { Container } from './container';

import { Box } from '@mui/material';

const animateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({...args, wasDragging: true});

function DroppableContainer({
  children,
  columns = 1,
  disabled,
  id,
  containerStyles,
  items,
  disableHandle = false,
  disableDelete = false,
  style,
  ...props
}) {
  const {
    active,
    attributes,
    isDragging,
    listeners,
    over,
    setNodeRef,
    transition,
    transform,
  } = useSortable({
    id,
    data: {
      type: 'container',
      children: items,
    },
    animateLayoutChanges,
  });
  const isOverContainer = over
    ? (id === over.id && active?.data.current?.type !== 'container') ||
      items.includes(over.id)
    : false;

  return (
    <Container
      ref={disabled ? undefined : setNodeRef}
      disableHandle={disableHandle}
      disableDelete={disableDelete}
      containerStyles={containerStyles}
      style={{
        ...style,
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : undefined,
      }}
      hover={isOverContainer}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      columns={columns}
      {...props}
    >
      {children}
    </Container>
  );
}

const dropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5',
      },
    },
  }),
};

export const TRASH_ID = 'void';
const PLACEHOLDER_ID = 'placeholder';
const empty = [];

export default function Kanban({
  adjustScale = false,
  itemCount = 3,
  cancelDrop,
  Menu = null,
  columns,
  loadedUser = true,
  handle = false,
  CardTemplate = null,
  items: initialItems,
  disableContainerHandle = false,
  disableContainerDelete = false,
  disableAddColumn = false,
  containerStyles,
  itemStyles,
  identifier = null,
  containerStyle,
  coordinateGetter = multipleContainersCoordinateGetter,
  getItemStyles = () => ({}),
  wrapperStyle = () => ({}),
  minimal = false,
  modifiers,
  renderItem,
  strategy = verticalListSortingStrategy,
  trashable = false,
  vertical = false,
  onCardClicked,
  onCardChangedState = null,
  scrollable,
}) {

  const [initItems, setInitItems] = useState(null);
  const [cards, setCards] = useState(null);
  const [items, setItems] = useState();
  const [containers, setContainers] = useState();


  const fetchData = async () => {

    let response = null;
    if (identifier == null)
    {
      response = await apiService().get("/Kanban/GetKanban");
    }
    else
    {
      response = await apiService().get("/Kanban/GetKanban?identifier=" + identifier);
    }
    
    if (response != null && response.status == 200)
    {
      let containers = [];
      let initItems = response.data;
      let cardNames = [];
      let container = {};

      initItems.forEach(element => {

        containers.push(element.id);

        let cards = [];
        element.cards.forEach((card) => {
          cards.push(card.id);
          cardNames.push(card);
        });
        
        container[element.id] = cards;
      });

      setInitItems(initItems);
      setCards(cardNames);
      setItems(container);
      setContainers(containers);
    }
  }

  useEffect(() => {

    if (loadedUser)
    {
      fetchData();
    }

  }, [loadedUser]);

  const getContainerName = (containerId) => {

    let name = "";
    initItems.forEach(element => {
      if (containerId == element.id)
      {
        name = element.name;
      }
    });

    return name;
  }

  const getCardName = (cardId) => {

    let name = "";
    if (cards != null)
    {
      cards.forEach(card => {
        if (cardId == card.id)
        {
          name = card.name;
        }
      });
    }

    return name;
  }

  const getCardDetails = (cardId) => {

    let cardDetail = {};
    if (cards != null)
    {
      cards.forEach(card => {
        if (cardId == card.id)
        {
          cardDetail = card;
        }
      });
    }

    return cardDetail;
  }

  
  const [activeId, setActiveId] = useState(null);
  const lastOverId = useRef(null);
  const recentlyMovedToNewContainer = useRef(false);
  const isSortingContainer = activeId ? containers.includes(activeId) : false;

  /**
   * Custom collision detection strategy optimized for multiple containers
   *
   * - First, find any droppable containers intersecting with the pointer.
   * - If there are none, find intersecting containers with the active draggable.
   * - If there are no intersecting containers, return the last matched intersection
   *
   */
  const collisionDetectionStrategy = useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items
          ),
        });
      }

      // Start by finding any intersecting droppable
      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? // If there are droppables intersecting with the pointer, return those
            pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, 'id');

      if (overId != null) {
        if (overId === TRASH_ID) {
          // If the intersecting droppable is the trash, return early
          // Remove this if you're not using trashable functionality in your app
          return intersections;
        }

        if (overId in items) {
          const containerItems = items[overId];

          // If a container is matched and it contains items (columns 'A', 'B', 'C')
          if (containerItems.length > 0) {
            // Return the closest droppable within that container
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.includes(container.id)
              ),
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{id: overId}];
      }

      // When a draggable item moves to a new container, the layout may shift
      // and the `overId` may become `null`. We manually set the cached `lastOverId`
      // to the id of the draggable item that was moved to the new container, otherwise
      // the previous `overId` will be returned which can cause items to incorrectly shift positions
      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeId;
      }

      // If no droppable is matched, return the last match
      return lastOverId.current ? [{id: lastOverId.current}] : [];
    },
    [activeId, items]
  );
  const [clonedItems, setClonedItems] = useState(null);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 8 }
    }),
    useSensor(TouchSensor, {
      activationConstraint: { distance: 8 }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter,
      activationConstraint: { distance: 8 }
    })
  );
  const findContainer = (id) => {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  };

  const getIndex = (id) => {
    const container = findContainer(id);

    if (!container) {
      return -1;
    }

    const index = items[container].indexOf(id);

    return index;
  };

  const onDragCancel = () => {
    if (clonedItems) {
      // Reset items to their original state in case items have been
      // Dragged across containers
      setItems(clonedItems);
    }

    setActiveId(null);
    setClonedItems(null);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false;
    });
  }, [items]);


  const [anchorEl, setAnchorEl] = useState(null);
  const [SelectedCardId, setSelectedCardId] = useState(null);
  const open = Boolean(anchorEl);
  const handleMoreClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleMoreClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {(loadedUser && containers != null && cards != null && items != null) &&
      <>
        <DndContext
          sensors={sensors}
          collisionDetection={collisionDetectionStrategy}
          measuring={{
            droppable: {
              strategy: MeasuringStrategy.Always,
            },
          }}
          onDragStart={({active}) => {
            setActiveId(active.id);
            setClonedItems(items);
          }}
          onDragOver={({active, over}) => {
            const overId = over?.id;

            if (overId == null || overId === TRASH_ID || active.id in items) {
              return;
            }

            const overContainer = findContainer(overId);
            const activeContainer = findContainer(active.id);

            if (!overContainer || !activeContainer) {
              return;
            }

            if (activeContainer !== overContainer) {
              setItems((items) => {
                const activeItems = items[activeContainer];
                const overItems = items[overContainer];
                const overIndex = overItems.indexOf(overId);
                const activeIndex = activeItems.indexOf(active.id);

                let newIndex;

                if (overId in items) {
                  newIndex = overItems.length + 1;
                } else {
                  const isBelowOverItem =
                    over &&
                    active.rect.current.translated &&
                    active.rect.current.translated.top >
                      over.rect.top + over.rect.height;

                  const modifier = isBelowOverItem ? 1 : 0;

                  newIndex =
                    overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
                }

                recentlyMovedToNewContainer.current = true;

                return {
                  ...items,
                  [activeContainer]: items[activeContainer].filter(
                    (item) => item !== active.id
                  ),
                  [overContainer]: [
                    ...items[overContainer].slice(0, newIndex),
                    items[activeContainer][activeIndex],
                    ...items[overContainer].slice(
                      newIndex,
                      items[overContainer].length
                    ),
                  ],
                };
              });
            }
          }}
          onDragEnd={({active, over}) => {
            if (active.id in items && over?.id) {
              setContainers((containers) => {
                const activeIndex = containers.indexOf(active.id);
                const overIndex = containers.indexOf(over.id);

                let array = arrayMove(containers, activeIndex, overIndex);

                apiService().put("/Kanban/SetColumnOrder", {
                  columnsIds: array
                });

                return array;
              });
            }

            const activeContainer = findContainer(active.id);

            if (!activeContainer) {
              setActiveId(null);
              return;
            }

            const overId = over?.id;

            if (overId == null) {
              setActiveId(null);
              return;
            }

            if (overId === TRASH_ID) {
              setItems((items) => ({
                ...items,
                [activeContainer]: items[activeContainer].filter(
                  (id) => id !== activeId
                ),
              }));
              setActiveId(null);
              return;
            }

            if (overId === PLACEHOLDER_ID) {
              const newContainerId = getNextContainerId();

              unstable_batchedUpdates(() => {
                setContainers((containers) => [...containers, newContainerId]);
                setItems((items) => ({
                  ...items,
                  [activeContainer]: items[activeContainer].filter(
                    (id) => id !== activeId
                  ),
                  [newContainerId]: [active.id],
                }));
                setActiveId(null);
              });
              return;
            }

            const overContainer = findContainer(overId);

            if (overContainer) {

              // you can't get the item from the key in an array, you need to search for it

              var name = getContainerName(overContainer);

              //alert(activeContainer + " \n" + overContainer)

              const activeIndex = items[activeContainer].indexOf(active.id);
              const overIndex = items[overContainer].indexOf(overId);

              //alert(activeIndex + " - " + active.id + " !== " + overId + " - " + overIndex)



              if (activeIndex !== overIndex) {

                let newArray = arrayMove(
                  items[overContainer],
                  activeIndex,
                  overIndex
                );

                setItems((items) => ({
                  ...items,
                  [overContainer]: newArray,
                }));

                // get the items we need to rearrange
                // alert(JSON.stringify(newArray))

                apiService().put("/Kanban/AssignCardsBasedOnOrder", {
                  cardId: active.id,
                  columnId: overContainer,
                  cards: newArray
                });

                const changeStateData = async () => {

                  if (onCardChangedState != null)
                  {
                    await onCardChangedState(overContainer, active.id);
                    await fetchData();
                  }
                }
                changeStateData();
                
              }
              else
              {
                // assign the order of the cards
                apiService().put("/Kanban/AssignColumnForCard", {
                  columnId: overContainer,
                  cardId: active.id,
                  orderId: 0
                });


                const changeStateData = async () => {

                  if (onCardChangedState != null)
                  {
                    await onCardChangedState(overContainer, active.id);
                    await fetchData();
                  }
                }
                changeStateData();
                
              }
            }

            setActiveId(null);
          }}
          cancelDrop={cancelDrop}
          onDragCancel={onDragCancel}
          modifiers={modifiers}
        >
          <div
            style={{
              display: 'inline-grid',
              boxSizing: 'border-box',
              padding: 20,
              gridAutoFlow: vertical ? 'row' : 'column',
            }}
          >
            <SortableContext
              items={[...containers, PLACEHOLDER_ID]}
              strategy={
                vertical
                  ? verticalListSortingStrategy
                  : horizontalListSortingStrategy
              }
            >
              {containers.map((containerId) => {

                let containerName = getContainerName(containerId);

                return (
                <DroppableContainer
                  key={containerId}
                  containerStyles={containerStyles}
                  id={containerId}
                  disableHandle={disableContainerHandle}
                  disableDelete={disableContainerDelete}
                  label={containerName}
                  columns={columns}
                  items={items[containerId]}
                  scrollable={scrollable}
                  style={containerStyle}
                  unstyled={minimal}
                  onRemove={() => handleRemove(containerId)}
                >
                  <SortableContext items={items[containerId]} strategy={strategy}>
                    {items[containerId].map((value, index) => {

                      return (
                        <SortableItem
                          disabled={isSortingContainer}
                          key={value}
                          onCardClicked={onCardClicked}
                          itemStyles={itemStyles}
                          id={value}
                          cardDetail={getCardDetails(value)}
                          CardTemplate={CardTemplate}
                          handleMoreClick={(event) => {
                            handleMoreClick(event);
                            setSelectedCardId(value);
                          }}
                          handleMoreClose={() => {
                            handleMoreClose();
                            setSelectedCardId(null);
                          }}
                          name={getCardName(value)}
                          index={index}
                          handle={handle}
                          style={getItemStyles}
                          wrapperStyle={wrapperStyle}
                          renderItem={renderItem}
                          containerId={containerId}
                          getIndex={getIndex}
                        />
                      );
                    })}
                  </SortableContext>
                </DroppableContainer>
              )})}
              {minimal ? undefined : (
                <>
                {!disableAddColumn && 
                  <DroppableContainer
                    id={PLACEHOLDER_ID}
                    containerStyles={containerStyles}
                    disabled={isSortingContainer}
                    items={empty}
                    onClick={handleAddColumn}
                    placeholder
                  >
                    + Add column
                  </DroppableContainer>
                }
                </>
              )}
            </SortableContext>

            
            
          </div>
          {createPortal(
            <DragOverlay adjustScale={adjustScale} dropAnimation={dropAnimation}>
              {activeId
                ? containers.includes(activeId)
                  ? renderContainerDragOverlay(CardTemplate, activeId, containerStyles)
                  : renderSortableItemDragOverlay(CardTemplate, activeId)
                : null}
            </DragOverlay>,
            document.body
          )}
          {trashable && activeId && !containers.includes(activeId) ? (
            <Trash id={TRASH_ID} />
          ) : null}
        </DndContext>
        {Menu != null &&
          <Menu anchorEl={anchorEl} open={open} handleMoreClose={handleMoreClose} cardId={SelectedCardId}  />
        }
      </>
      }
    </Box>
  );

  function renderSortableItemDragOverlay(CardTemplate, id) {
    return (
      <Item
        value={id}
        itemStyles={itemStyles}
        name={getCardName(id)}
        cardDetail={getCardDetails(id)}
        onCardClicked={onCardClicked}
        CardTemplate={CardTemplate}
        handle={handle}
        style={getItemStyles({
          containerId: findContainer(id),
          overIndex: -1,
          index: getIndex(id),
          value: id,
          isSorting: true,
          isDragging: true,
          isDragOverlay: true,
        })}
        color={getColor(id)}
        wrapperStyle={wrapperStyle({index: 0})}
        renderItem={renderItem}
        dragOverlay
      />
    );
  }

  function renderContainerDragOverlay(CardTemplate, containerId, containerStyles) {
    return (
      <Container
        label={getContainerName(containerId)}
        containerStyles={containerStyles}
        columns={columns}
        style={{
          height: '100%',
          paddingRight:"10px"
        }}
        shadow
        unstyled={false}
      >
        {items[containerId].map((item, index) => (
          <Item
            key={item}
            onCardClicked={onCardClicked}
            value={item}
            itemStyles={itemStyles}
            CardTemplate={CardTemplate}
            cardDetail={getCardDetails(item)}
            name={getCardName(item)}
            handle={handle}
            style={getItemStyles({
              containerId,
              overIndex: -1,
              index: getIndex(item),
              value: item,
              isDragging: false,
              isSorting: false,
              isDragOverlay: false,
            })}
            color={getColor(item)}
            wrapperStyle={wrapperStyle({index})}
            renderItem={renderItem}
          />
        ))}
      </Container>
    );
  }

  function handleRemove(containerID) {
    setContainers((containers) =>
      containers.filter((id) => id !== containerID)
    );
  }

  function handleAddColumn() {
    const newContainerId = getNextContainerId();

    unstable_batchedUpdates(() => {
      setContainers((containers) => [...containers, newContainerId]);
      setItems((items) => ({
        ...items,
        [newContainerId]: [],
      }));
    });
  }

  function getNextContainerId() {
    const containerIds = Object.keys(items);
    const lastContainerId = containerIds[containerIds.length - 1];

    return String.fromCharCode(lastContainerId.charCodeAt(0) + 1);
  }
}


function getColor(id) {
  switch (String(id)[0]) {
    case 'A':
      return '#7193f1';
    case 'B':
      return '#ffda6c';
    case 'C':
      return '#00bcd4';
    case 'D':
      return '#ef769f';
  }

  return undefined;
}

function Trash({id}) {
  const {setNodeRef, isOver} = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        left: '50%',
        marginLeft: -150,
        bottom: 20,
        width: 300,
        height: 60,
        borderRadius: 5,
        border: '1px solid',
        borderColor: isOver ? 'red' : '#DDD',
      }}
    >
      Drop here to delete
    </div>
  );
}

function SortableItem({
  disabled,
  id,
  index,
  handle,
  name,
  renderItem,
  onCardClicked,
  CardTemplate,
  cardDetail,
  handleMoreClick,
  itemStyles,
  handleMoreClose,
  style,
  containerId,
  getIndex,
  wrapperStyle,
}) {
  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition,
  } = useSortable({
    id,
  });
  const mounted = useMountStatus();
  const mountedWhileDragging = isDragging && !mounted;

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={id}
      itemStyles={itemStyles}
      onCardClicked={onCardClicked}
      dragging={isDragging}
      sorting={isSorting}
      cardDetail={cardDetail}
      CardTemplate={CardTemplate}
      handleMoreClick={handleMoreClick}
      handleMoreClose={handleMoreClose}
      name={name}
      handle={handle}
      handleProps={handle ? {ref: setActivatorNodeRef} : undefined}
      index={index}
      wrapperStyle={wrapperStyle({index})}
      style={style({
        index,
        value: id,
        isDragging,
        isSorting,
        overIndex: over ? getIndex(over.id) : overIndex,
        containerId,
      })}
      color={getColor(id)}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
      renderItem={renderItem}
    />
  );
}

function useMountStatus() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);

    return () => clearTimeout(timeout);
  }, []);

  return isMounted;
}