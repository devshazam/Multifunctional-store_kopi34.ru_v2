import { Button, Result } from 'antd'
 
export default function NotFound() {
  return (
    <Result
    status="404"
    title="404"
    subTitle="К сожалению данный адрес не найден"
    extra={<Button type="primary" href='/'>На главную</Button>}
  />
  )
}