import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('quote', function (table) {
		table.increments('id').primary();
		table.string('author').notNullable();
		table .text('body').notNullable();
	});
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('quote');
}

