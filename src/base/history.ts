import { createBrowserHistory, Location } from 'history';

const history = createBrowserHistory();

export const breadcrumbs: Location[] = [];
breadcrumbs.push(history.location);
history.listen((location, action) => {
  switch (action) {
    case 'PUSH': {
      breadcrumbs.push(location);
      break;
    }
    case 'POP': {
      breadcrumbs.pop();
      break;
    }
    case 'REPLACE': {
      breadcrumbs.pop();
      breadcrumbs.push(location);
    }
  }
});

export default history;
