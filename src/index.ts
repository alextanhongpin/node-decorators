import * as express from 'express'
import { Response, Params, Controller, Get, attachControllers } from '@decorators/express'

@Controller('/')
class UserController {
  @Get('/users/:id')
  getData(@Response() res: express.Response, @Params('id') id: string) {
    res.status(200).json({
      msg: 'hello world',
      id
    })
  }
}

let app = express()
attachControllers(app, [UserController])
app.listen(3000)
