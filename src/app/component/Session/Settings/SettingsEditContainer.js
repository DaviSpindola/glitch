import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Typography } from "@material-ui/core";

import SettingsForm from "./SettingsForm";
import * as Media from "../../../../firebase/storage/media";
import * as Users from "../../../../firebase/firestore/user";

class SettingsEditContainer extends React.PureComponent {
  state = {
    settings: null,
    photo: null,
    cover: null
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

  handlePhoto = ({ target }) => {
    this.setState({ [target.name]: target.files[0] });
  };

  handleSubmit = e => {
    const { authUser, sendNotification } = this.props;
    const { photo, cover } = this.state;

    if (photo !== null && authUser.uid) {
      Media.uploadMedia(authUser.uid, photo).then(({ ref }) => {
        ref.getDownloadURL().then(res => {
          this.setState({
            settings: Object.assign({}, this.state.settings, {
              photo: res
            })
          });

          Users.update(authUser, this.state.settings)
            .then(() => {
              sendNotification("Informações atualizadas");
            })
            .catch(console.log);

          this.setState({ photo: null });
        });
      });
    }

    if (cover !== null && authUser.uid) {
      Media.uploadMedia(authUser.uid, cover).then(({ ref }) => {
        ref.getDownloadURL().then(res => {
          this.setState({
            settings: Object.assign({}, this.state.settings, {
              cover: res
            })
          });

          Users.update(authUser, this.state.settings)
            .then(() => {
              sendNotification("Informações atualizadas");
            })
            .catch(console.log);

          this.setState({ cover: null });
        });
      });
    }

    if (!photo && !cover) {
      Users.update(authUser, this.state.settings)
        .then(() => {
          sendNotification("Informações atualizadas");
        })
        .catch(console.log);
    }

    e.preventDefault();
  };

  render() {
    const { settings } = this.state;

    return (
      <div>
        <Typography variant="h6">Editar informações da conta</Typography>

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
  receiveSettings: settings => dispatch({ type: "RECEIVE_SETTINGS", settings }),
  sendNotification: message => dispatch({ type: "SEND_NOTIFICATION", message })
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SettingsEditContainer);
