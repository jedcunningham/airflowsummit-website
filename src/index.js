/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {shuffleNodeChildren} from "./js/committersList";
import {showMore} from "./js/showMore";
import "./js/navbarScroll";
import "./js/drawer";
import "./js/contentDrawer";
import "./js/progressTracking";
import "./js/makeTableResponsive";

if (document.querySelector("#search")) {
  import(/* webpackChunkName: "search" */ "./js/searchBlogPosts");
}

shuffleNodeChildren("#committers-container");
shuffleNodeChildren("#pmc-container");


if (document.querySelector("#header")) {
  import(/* webpackChunkName: "header" */ "./js/headerAnimation").then((module) => {
    module.initHeaderAnimation();
  });
}
