import React from 'react';

import { Link } from "@material-ui/core";

export default {
  title: 'Navigation/Footer',
  component: Footer
};

export const Default = () => <Footer
    description = "This is footer description"
    links_array = {[<Link>Інстаграм</Link>, <Link>Телеграм</Link>, <Link>емейл</Link>] }
/>;

