import React       from 'react'
import { shallow } from 'enzyme'
import App         from 'components/app'

describe('app', () => {
  it('should render', () =>{
    let wrapper = shallow(<App/>)
    expect(wrapper).toHaveDisplayName('div')
    expect(wrapper).toHaveClassName('app')
  })
})
