import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Verticalbar from '../components/Verticalbar'

function Student() {
  return (
    <div className='student-page'>
      <Row className='w-100'>
        <Col lg={2} md={2} sm={2} xs={2}>
          <Verticalbar/>
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className='w-100 text-center mt-5 m-auto'>
            <p className='text-danger'>
              *Student can manage their college profile details through this port*
            </p>
            <b>
              For more please contact college administrative
            </b>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Student