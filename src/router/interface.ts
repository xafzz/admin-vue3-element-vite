import {RouteRecordRaw, RouteComponent, RouteRecordRedirectOption} from 'vue-router';

export interface RouteMeta {
    title: string;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name: string;
    path: string;
    component?: () => Promise<any>,
    redirect?: string;
}
export type RouteModule = AppRouteRecordRaw;
