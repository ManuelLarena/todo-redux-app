import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'activos';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos }>()
);


