import 'reflect-metadata';
import { Container, ContainerInstance } from 'typedi';
import { ServerDiModule } from '~src/dimodule';
import { Server } from '~src/server';

const ci: ContainerInstance = Container.of(undefined);
new ServerDiModule(ci);
const server = ci.get(Server);
server.start();
