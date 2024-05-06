import { useState } from 'react'
import EmployeeInfo from '../EmployeeInfo'
import PersonTraveling from '../PersonTraveling'
import Tab from '../tabs/Tab'

export default function TabNav () {
  const [selectedTab, setSelectedTab] = useState('employee')
  const handleTabClick = (tab) => {
    setSelectedTab(tab)
  }
  return (
    <nav>
      <Tab
        label='Employee Info'
        selected={selectedTab === 'employee'}
        onSelect={() => handleTabClick('employee')}
      />
      <Tab
        label='Person Traveling'
        selected={selectedTab === 'person'}
        onSelect={() => handleTabClick('person')}
      />
      {selectedTab === 'employee' && <EmployeeInfo text='Employee Information' />}
      {selectedTab === 'person' && <PersonTraveling text='Person Traveling' />}
    </nav>
  )
}
