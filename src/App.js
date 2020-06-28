import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import CardList from "./components/CardList";
import { IonReactRouter } from "@ionic/react-router";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Info from "./components/Info";
import {
  subCategorySentences,
  categorySentences,
  virusSentences,
} from "./static-data/sentences";
import {
  subCategoryCards,
  categoryCards,
  virusCards,
} from "./static-data/cards";

const App = (props) => {
  return (
    <IonApp overflow-scroll="true">
      {/* <AccessibilityButton /> */}
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route
              path="/virus"
              render={(props) => (
                <CardList
                  cards={virusCards}
                  voices={virusSentences}
                  {...props}
                />
              )}
              exact={true}
            />
            <Route
              path="/:category/:info"
              render={(props) => <Info {...props} />}
              exact={true}
            />
            <Route
              path="/:category"
              render={(props) => (
                <CardList
                  cards={subCategoryCards}
                  voices={subCategorySentences}
                  {...props}
                />
              )}
              exact={true}
            />
            <Route
              path="/"
              render={(props) => (
                <CardList
                  cards={categoryCards}
                  voices={categorySentences}
                  {...props}
                />
              )}
              exact={true}
            />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

//   const { category, subCategory } = props
// 	return (
// 		<IonApp overflow-scroll="true">
// 			{(!category || !subCategory) && <CardList />}
// 			{category && subCategory && <Info />}
// 			{/* <AccessibilityButton /> */}
// 			{/* <IonReactRouter>
// 				<IonRouterOutlet>
// 					<Switch>
// 						<Route path="/" component={CardList} exact />
// 						<Route path="/:category" component={CardList} exact />
// 						<Route path="/:category/:subcategory" component={Info} exact />
// 					</Switch>
// 				</IonRouterOutlet>
// 			</IonReactRouter> */}
// 		</IonApp>
// 	)
// }

// const mapStateToProps = (state) => {
// 	const { selectedCategory, selectedSubCategory } = state.display
// 	return {
// 		category: selectedCategory,
// 		subCategory: selectedSubCategory
// 	}
// }

// export default connect(mapStateToProps)(App)
