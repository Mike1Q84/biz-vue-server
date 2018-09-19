import 'reflect-metadata';
import { Container, ContainerInstance } from 'typedi';

import { ServerDiModule } from '~dimodule';
import { Server } from '~server';

const ci: ContainerInstance = Container.of(undefined);
new ServerDiModule(ci);
const server = ci.get(Server);
server.start();
