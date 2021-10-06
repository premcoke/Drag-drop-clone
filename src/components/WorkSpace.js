import Button from './Button';
import Input from './Input';
import Paragraph from './Paragraph';

const WorkSpace = ({ componentList }) => {
    const getComponent = (component) => {
        var currentComp;
        switch (component) {
            case 'input':
                currentComp = <Input />;
                break;
            case 'button':
                currentComp = <Button />;
                break;
            case 'paragraph':
                currentComp = <Paragraph />;
                break;
            default:
                currentComp = <></>;
                break;

        }
        return currentComp;
    }
    return (
        <>
            {
                componentList.map((component, index) => {
                    return (
                        <div key={index} style={{ position: 'absolute', top: component.y, left: component.x }}>{
                            getComponent(component.type)
                        }
                        </div>
                    );
                })
            }
        </>
    )
};

export default WorkSpace;