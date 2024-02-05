import { FastifyInstance } from 'fastify';

export default (fastify: FastifyInstance) => {
    fastify.get('/profile', async (request, reply) => {
        return { status: true, data: { name: 'John Doe', age: 30 } };
    });
};