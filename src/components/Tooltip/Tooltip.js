import ReactTooltip from 'react-tooltip';

const Tooltip = props => (
  <ReactTooltip {...props}>
    {props.children}
  </ReactTooltip>
);

export default Tooltip;
