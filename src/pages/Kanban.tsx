import { useState } from "react";
import styled from "styled-components";
import { AddColumn } from "../components/Button/AddColumn";
import { ICard } from "../components/Card/Card";
import { Column } from "../components/Column/ToDoColumn";
import { columnList, completeCards } from "../utils/mockData";

export const Kanban = () => {
  const [columnArray, setColumnArray] = useState<any>(columnList);
  const [columnIndex, setColumnIndex] = useState(0);
  const [draggableItem, setDraggableItem] = useState<any>();
  const [startIndex, setStartIndex] = useState<number>(0);

  function handleDrag() {
    try {
      if (draggableItem) {
        if (startIndex === columnIndex) return;

        setColumnArray((prev: any) => {
          const copy = [...prev];

          const newArr = copy[startIndex]?.list?.filter((item: ICard) => {
            return item?.id !== draggableItem?.id;
          });
          copy[startIndex].list = newArr;

          copy[columnIndex]?.list?.unshift(draggableItem);

          return copy;
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDraggableItem(null);
    }
  }

  const catchStartIndex = (index: number) => {
    setStartIndex(index);
  };
  return (
    <KanbanStlye>
      {columnArray.map(
        (i: { title: string; id: number; list: ICard[] }, index: number) => {
          return (
            <Column
              draggableItem={draggableItem}
              key={i.id}
              title={i.title}
              list={i.list}
              listIndex={index}
              onDragOver={() => setColumnIndex(index)}
              onDragStart={handleDrag}
              onMouseDown={() => catchStartIndex(index)}
              setDraggableItem={setDraggableItem}
            />
          );
        }
      )}

      <AddColumn />
      <Column title="Completed Tasks" list={completeCards} />
    </KanbanStlye>
  );
};

const KanbanStlye = styled.div`
  height: fit-content;
  padding: 1rem;
  display: flex;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primaryText};
  overflow-x: auto;
`;
