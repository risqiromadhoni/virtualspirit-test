import { Card, Input } from "@/components/atoms"
import { FC } from "react"

const FormIdentity: FC = () => {
  return (
    <Card>
      <Input type="text" name="Fullname" placeholder="Name" />
      <Input type="email" name="E-mail" placeholder="Email" />
      <Input type="tel" name="Phone Number" placeholder="Phone" />
    </Card>
  )
}

export default FormIdentity