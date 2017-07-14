import React, { Component } from "react";
import { Control } from "react-redux-form";
import { Grid } from "semantic-ui-react";

import SemanticCheckbox from "../../inputs/checkbox";
import SelectType from "../../inputs/selectType";
import SemanticInput from "../../semanticInput";
import RequestFormStep3Sites from "./step3Sites";

export default class RequestFormStep3 extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column mobile="16">
          <label>Site Type</label>
          <div>
            <Control model=".step3.type" component={SelectType} />
          </div>
        </Grid.Column>
        <Grid.Column mobile="8">
          <Control
            model=".step3.length"
            component={SemanticInput}
            controlProps={{
              label: "Length"
            }}
          />
        </Grid.Column>
        <Grid.Column mobile="8">
          <Control.text
            model=".step3.electric"
            component={SemanticInput}
            controlProps={{
              label: "Electric"
            }}
          />
        </Grid.Column>

        <Grid.Column mobile="8">
          <Grid>
            <Grid.Column width="16">
              <Control.checkbox
                model=".step3.water"
                component={SemanticCheckbox}
                controlProps={{
                  label: "Water"
                }}
              />
            </Grid.Column>
            <Grid.Column width="16">
              <Control.checkbox
                model=".step3.sewer"
                component={SemanticCheckbox}
                controlProps={{
                  label: "Sewer"
                }}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>

        <Grid.Column mobile="16">
          <label>Only Specific Sites:</label>
          <RequestFormStep3Sites />
        </Grid.Column>
      </Grid>
    );
  }
}
