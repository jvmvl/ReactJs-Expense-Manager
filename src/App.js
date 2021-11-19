import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ExpenseList from './components/ExpensesList';
import IncomeList from './components/IncomeList'
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
        <NavBar/>
        <div className='container'>
          <Row>
            <Col sm={4} className='mt-3'>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="nav nav-pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Expenses</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Income</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className='row'>
                      <div className='col-sm mt-3'>
                        <ExpenseList/>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className='row'>
                      <div className='col-sm mt-3'>
                        <IncomeList/>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </div>
    </AppProvider>
  );
}

export default App;