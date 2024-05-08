import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { HomeController } from './home/HomeController';
import { HomeService } from './home/home.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class AppModule {}
