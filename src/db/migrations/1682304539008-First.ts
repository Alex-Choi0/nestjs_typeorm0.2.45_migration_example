// src/db/migrations/1682304539008-First.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class First1682304539008 implements MigrationInterface {
  // migration 쿼리문 작성
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 간단한 users테이블 생성
    await queryRunner.query(
      `CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        "userId" VARCHAR(255) NOT NULL,
        email VARCHAR NOT NULL,
        nickname VARCHAR NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`,
    );
  }

  // migration 취소 쿼리문 작성
  public async down(queryRunner: QueryRunner): Promise<void> {
    // users테이블 삭제
    await queryRunner.query(`DROP TABLE users`);
  }
}
