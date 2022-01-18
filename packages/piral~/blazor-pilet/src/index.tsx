import { PiletApi } from 'app-shell';
import * as Blazor from './blazor.codegen';
import './blazor-pilet.styles.css';

export function setup(app: PiletApi) {
    Blazor.initPiralBlazorApi(app);
    Blazor.registerDependencies(app);
    Blazor.registerOptions(app);
    Blazor.registerPages(app);
    Blazor.registerExtensions(app);
    Blazor.setupPilet(app);
}
