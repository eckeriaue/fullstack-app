import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

void async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    })
  )

  const config = await app.get(ConfigService)
  const port = config.get<number>('API_PORT') || 3000

  await app.listen(port, () => {
    console.info(`app started on port: ${port}`)
  })

}()