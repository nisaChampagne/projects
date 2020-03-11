import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import ProjectsList from '../projects/projectsList/projectsList'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Just A Bunch of Random Projects'
      inverted
      style={{
        color: "white",
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Check them out.'
      inverted
      style={{
        color: "white",
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <NavLink to="/projectlist"  exact className="notification_link" >

     <Button style={{fontSize: '17px'}}> Get Started
      <Icon name='right arrow' />
      </Button>
    </NavLink>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Homepage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
              I like to make random projects
            </Header>
            <List link inverted >
                <List.Item><NavLink to="/todo" exact className="project_link" style={{color:"white", textDecoration: 'none'}}>Todo List</NavLink></List.Item>
                <List.Item><NavLink to="/groceryList" exact className="project_link" style={{color:"white", textDecoration: 'none'}}>Basic Grocery List</NavLink></List.Item>
                <List.Item><NavLink to="/easiercalc" exact className="project_link" style={{color:"white", textDecoration: 'none'}}>Easier Calc</NavLink></List.Item>
                <List.Item><NavLink to="/calc" exact className="project_link" style={{color:"white", textDecoration: 'none'}}>Calculator</NavLink></List.Item>
                <List.Item><NavLink to="/counter" exact className="project_link" style={{color:"white", textDecoration: 'none'}}>Counter</NavLink></List.Item>
                <List.Item><NavLink to="/calendar" exact className="project_link" style={{color:"white", textDecoration: 'none'}}>Calendar</NavLink></List.Item>
                <List.Item><NavLink to="/random" exact className="project_link" style={{color:"white", textDecoration: 'none'}}>Random</NavLink></List.Item>
                <List.Item><NavLink to="/drum" exact className="project_link" style={{color:"white", textDecoration: 'none'}}>Drum</NavLink></List.Item>
              </List>
          </Grid.Column>
          {/* <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Random JavaScript projects will help keep your skills sharp."
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what anyone who knows what they are doing will say</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "How do I JavaScript again?"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Me, back in May of 2019
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as='h4' inverted style={{color:"white", fontSize:'20px'}}>
                Feel free to poke around under the hood.
              </Header>
              <p>
                A JavaScript project/problem a day will get you the good pay... I think that is how it goes at least.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default Homepage