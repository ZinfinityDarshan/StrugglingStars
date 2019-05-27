import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'searchtab',
                children: [
                    {
                        path: '',
                        loadChildren: './search/search.module#SearchPageModule'
                    }
                ]
            },
            {
                path: 'trendingtab',
                children: [
                    {
                        path: '',
                        loadChildren: './trending/trending.module#TrendingPageModule'
                    }
                ]
            },
            {
                path: 'acounttab',
                children: [
                    {
                        path: '',
                        loadChildren: './acount/account.module#AccountPageModule'
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: './hometab/hometab.module#HometabPageModule'
                    }
                ]
            },
            {
                path: 'notify',
                children: [
                    {
                        path: '',
                        loadChildren: './notification/notification.module#NotificationPageModule'
                    }
                ]
            },
            {
                path: 'addpost',
                children: [
                    {
                        path: '',
                        loadChildren: './addpost/addpost.module#AddpostPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map