import React from 'react';
import { connect } from 'react-redux';

import './startpage.styles.scss';
import AbsoluteWrapper from '../../components/absolute-wrapper/absolute-wrapper.component';
import StartMenu from '../../components/start-menu/start-menu.component';
import { RESET_STATE } from '../../redux/reset.type';

class StartPage extends React.Component {
  componentDidMount() {
    this.props.reset();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <div className="startpage">
          <StartMenu />
        </div>
      </AbsoluteWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(RESET_STATE),
});

export default connect(null, mapDispatchToProps)(StartPage);
