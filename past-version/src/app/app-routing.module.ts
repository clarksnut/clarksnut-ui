import { QueryResolver } from './shared/query-resolver.service';
import { ProfileResolver } from './shared/profile-resolver.service';
import { ContextResolver } from './shared/context-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './landing-page/landing-page.module#LandingPageModule',
    pathMatch: 'full'
  },

  // Home
  {
    path: '_home',
    loadChildren: './home/home.module#HomeModule',
    data: {
      title: 'Home'
    }
  },

  // Getting started
  {
    path: '_gettingstarted',
    loadChildren: './getting-started/getting-started.module#GettingStartedModule',
    data: {
      title: 'Getting Started'
    }
  },

  // Documents
  {
    path: '_inbox',
    loadChildren: './document/inbox/inbox.module#InboxModule',
    data: {
      title: 'Inbox'
    }
  },

  {
    path: '_starred',
    loadChildren: './document/starred/starred.module#StarredModule',
    data: {
      title: 'Starred'
    }
  },

  {
    path: '_search/:query',
    resolve: {
      query: QueryResolver
    },
    loadChildren: './document/inbox/inbox.module#InboxModule',
    data: {
      title: 'Search'
    }
  },

  {
    path: '_inbox/:document',
    resolve: {
      context: ContextResolver
    },
    loadChildren: './document/overview/overview.module#OverviewModule',
    data: {
      title: 'Document'
    }
  },

  {
    path: '_starred/:document',
    resolve: {
      context: ContextResolver
    },
    loadChildren: './document/overview/overview.module#OverviewModule',
    data: {
      title: 'Document'
    }
  },

  // Error Pages
  {
    path: '_error',
    loadChildren: './layout/error/error.module#ErrorModule',
    data: {
      title: 'Error'
    }
  },

  // Profile
  {
    path: '_profile',
    resolve: {
      context: ProfileResolver
    },
    loadChildren: './profile/profile.module#ProfileModule',
    data: {
      title: 'Profile'
    }
  },

  {
    path: ':entity',
    resolve: {
      context: ContextResolver
    },
    loadChildren: './profile/profile.module#ProfileModule',
    data: {
      title: 'Profile'
    }
  },

  // Analyze
  {
    path: ':entity/:space',
    resolve: {
      context: ContextResolver
    },
    loadChildren: './space/analyze/analyze.module#AnalyzeModule',
    data: {
      title: 'Analyze'
    }
  },

  // Space-settings
  {
    path: ':entity/:space/settings',
    resolve: {
      context: ContextResolver
    },
    loadChildren: './space/settings/space-settings.module#SpaceSettingsModule',
    data: {
      title: 'Settings'
    }
  },

  {
    path: '**',
    redirectTo: '/_error'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
//      useHash: Boolean(history.pushState) === false,
      useHash: true,
//      preloadingStrategy: PreloadAllModules,
      enableTracing: true,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
