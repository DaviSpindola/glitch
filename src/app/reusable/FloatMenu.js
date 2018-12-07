import React from "react";
import { Popper, Grow, Paper, ClickAwayListener } from "@material-ui/core";

class FloatMenu extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    const { render, children } = this.props;

    return (
      <div style={{ display: "flex" }}>
        {React.cloneElement(render, {
          onClick: this.handleOpen,
          buttonRef: node => {
            this.anchorEl = node;
          },
          "aria-haspopup": true
        })}
        <Popper
          open={this.state.open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  {/* <MenuList>
                    {React.Children.map(children, child => {
                      React.cloneElement(child, {
                        onClick: console.log("oi")
                      });
                    })}
                  </MenuList> */}
                  {children}
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default FloatMenu;
