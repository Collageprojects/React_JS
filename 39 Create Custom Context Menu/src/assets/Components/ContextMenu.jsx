import React from "react";

export default function ContextMenu({
  menuPosition,
  SetMenuPosition,
  setExpenses,
  RowId,
}) {
  if (!menuPosition.left) return;

  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          console.log("Editing"), SetMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== RowId)
          ),
            SetMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
