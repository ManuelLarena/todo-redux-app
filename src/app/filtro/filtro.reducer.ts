import { createReducer, on, Action } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(
  estadoInicial,
  on( setFiltro, (state, {filtro}) =>  filtro)
);

export function filtroReducer(state: filtrosValidos = estadoInicial, action: Action) {
  return _filtroReducer(state, action);
}
