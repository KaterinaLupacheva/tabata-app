import React, { createContext } from "react";

export const VideoContext = createContext();

export class VideoContextProvider extends React.Component {
  state = {
    isPaused: true
  };

  togglePlayVideo = () => {
    this.setState(state => ({
      isPaused: !state.isPaused
    }));
  };

  render() {
    return (
      <VideoContext.Provider
        value={{
          state: this.state,
          update: this.togglePlayVideo
        }}
      >
        {this.props.children}
      </VideoContext.Provider>
    );
  }
}

export const VideoContextConsumer = VideoContext.Consumer;
