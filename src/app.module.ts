import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './client/client.module';
import { EmployeesModule } from './employees/employees.module';


@Module({
  imports: [ProjectModule,
      TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'appdata',
      password: 'mssql',
      database: 'civix_data',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        encrypt: true,
        trustServerCertificate: true, // 👈 Esto desactiva la verificación del certificado
      },
      synchronize: true,
      }),
      ClientModule,
      EmployeesModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 