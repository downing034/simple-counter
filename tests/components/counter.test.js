import React       from 'react'
import { shallow } from 'enzyme'
import Counter     from 'components/counter'

describe('App', () => {
  it('should render', () =>{
    let wrapper = shallow(<Counter/>)
    expect(wrapper).toHaveDisplayName('div')
    expect(wrapper).toHaveClassName('app')
  })
})
