import React from 'react';

export default (props) => (

    <div className="well">
        <form className="form-horizontal" onSubmit={props.onSubmitEvent}>
            <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                <input onChange={props.FilterChange} className="form-control" type="text" name='input' value={props.stateValue} required/>
                <div className="alert alert-warning" hidden={props.hiddenDiv}>Please enter a name</div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={props.buttonValidate}>Create Playlist</button>
                </div>
            </div>
            </fieldset>
        </form>
        </div>
       
);
