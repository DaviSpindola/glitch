import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as Users from "../../../../firebase/firestore/user";
import SettingsForm from "./SettingsForm";
import * as Media from "../../../../firebase/storage/media";
import { Typography } from "@material-ui/core";

class SettingsEditContainer extends React.PureComponent {
  state = {
    settings: null,
    photo: null
  };

  componentDidMount() {
    const { authUser } = this.props;

    Users.get(authUser).then(res => {
      this.setState({ settings: res.data() });
    });
  }

  handleInput = ({ target }) => {
    this.setState({
      settings: { ...this.state.settings, [target.name]: target.value }
    });
  };

  handlePhoto = async e => {
    const { photo } = this.state;
    await this.setState({ photo: e.target.files[0] });
    console.log(photo);
  };

  handleSubmit = e => {
    const { authUser } = this.props;
    const { settings, photo } = this.state;

    if (photo !== null && authUser.uid) {
      Media.uploadMedia(authUser.uid, photo).then(({ ref }) => {
        ref.getDownloadURL().then(res => {
          this.setState({
            settings: Object.assign({}, this.state.settings, {
              photo: res
            })
          });

          Users.update(authUser, this.state.settings)
            .then(console.log)
            .catch(console.log);
        });
      });
    }

    console.log(settings);

    if (!photo) {
      debugger;
      Users.update(authUser, this.state.settings)
        .then(console.log)
        .catch(console.log);
    }

    e.preventDefault();
  };

  render() {
    const { settings } = this.state;

    return (
      <div>
        <Typography>Editar informações</Typography>

        <SettingsForm
          handleSubmit={this.handleSubmit}
          handleImage={this.handlePhoto}
          handleInput={this.handleInput}
          {...settings}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settingsState,
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = dispatch => ({
  receiveSettings: settings => dispatch({ type: "RECEIVE_SETTINGS", settings })
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SettingsEditContainer);
