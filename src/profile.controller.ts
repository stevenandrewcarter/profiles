import { Controller, Get } from '@nestjs/common';
import { Database } from 'sqlite3';

@Controller('profiles')
export class ProfilesController {
  constructor() {
    this.db = new Database(':memory:');
  }

  @Get()
  findAll(): string {
    this.db.serialize(() => {
      this.db.each(`SELECT * FROM PROFILES`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
      });
    });
    return 'All the Profiles';
  }
}
