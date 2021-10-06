const DragComponentList = ({ dispatchHandler }) => {
    const dragStopHandler = (e) => {
        dispatchHandler(e.target.innerText.trim(), e);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="button-component w-50 p-3 m-1 border text-center user-select-none" draggable="true" onDragEnd={dragStopHandler}>
                <div>Button</div>
            </div>
            <div className="paragraph-component w-50 p-3 m-1 border text-center user-select-none" draggable="true" onDragEnd={dragStopHandler}>
                <div>Paragraph</div>
            </div>
            <div className="input-component drag-component w-50 p-3 m-1 border text-center user-select-none" draggable="true" onDragEnd={dragStopHandler}>
                <div>Input</div>
            </div>
        </div>
    );
};

export default DragComponentList;