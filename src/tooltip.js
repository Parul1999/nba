import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    marginLeft:-100

  },
}))(Tooltip);

export default function Tool(props) {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            {props.team_name}<br/>
            City: {props.city}<br/>
            Conference: {props.conference}<br/>
            Division: {props.division}
          </React.Fragment>
        }
        arrow
        placement="right"
      >
        <div>
            {props.children}
        </div>
      </HtmlTooltip>
    </div>
  );
}