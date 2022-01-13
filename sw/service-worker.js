import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { Prefetcher } from '@layer0/prefetch/sw';
import { prefetch } from '@layer0/prefetch/window';

skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST || []);

prefetch('/some/url');
new Prefetcher().route();
