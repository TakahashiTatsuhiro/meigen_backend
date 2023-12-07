import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('meigen', function (table) {
		table.increments('id').primary();
		table.string('author').notNullable();
		table .text('meigen').notNullable();
	});
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('meigen');
}

