import './BaseTemplate.css'

export interface IBaseTemplate {
    textProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({textProp}) => {
  return <div className='container'>{textProp}</div>;
};

export default BaseTemplate;