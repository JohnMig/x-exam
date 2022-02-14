import LabelContainer from '../../hoc/LabelContainer/LabelContainer'

import Label from '../../shared/Label/Label'
import Input from '../../shared/Input/Input'
import DataList from '../../shared/DataList/DataList'
import InputList from '../../shared/InputList/InputList'

import './CalendarContent.css'

const CalendarContent = ({ item, onChangeValue }) => {
  const { title, date, status } = item

  return (
    <div className="calendar-shared-content">
      <LabelContainer>
        <Label title="TITLE">
          <Input value={title} name="title" placeholder="TITLE" handleChangeValue={onChangeValue} />
        </Label>
      </LabelContainer>
      <LabelContainer>
        <Label title="DATE">
          <Input value={date} name="date" placeholder="DATE" handleChangeValue={onChangeValue} />
        </Label>
      </LabelContainer>
      <LabelContainer>
        <Label title="STATUS">
          <InputList list="status" value={status} name="status" placeholder="STATUS" handleChangeValue={onChangeValue} />
        </Label>
        <DataList id="status" />
      </LabelContainer>
    </div>
  )
}

export default CalendarContent
