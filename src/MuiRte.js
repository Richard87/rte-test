import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { EditorState} from 'draft-js'
import MUIRichTextEditor from 'mui-rte/dist/MUIRichTextEditor'
import {Grid, Paper} from "@mui/material";
import {stateToHTML} from "draft-js-export-html"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
export default function MuiRte() {
    const editorRef = React.useRef()
    const [value, setValue] = React.useState(() => EditorState.createEmpty())
    
    return (
        <MUIRichTextEditor 
                ref={editorRef} 
                onChange={setValue} 
                label="Start typing..."
        />
    )
}
`

export default function MuiRte() {
    const editorRef = React.useRef()
    const [value, setValue] = React.useState(() => EditorState.createEmpty())

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Paper sx={{height: '500px'}} onClick={() => editorRef.current.focus()}>
                <MUIRichTextEditor ref={editorRef} onChange={setValue} label="Start typing..."/>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper elevation={0}>
                    <pre>{JSON.stringify(value, 2, 2)}</pre>
                </Paper>
            </Grid>
            <Grid container item  xs={12} sm={8} direction={"column"}>

                <Grid item>
                    <Paper elevation={0}>
                        <pre>{stateToHTML(value.getCurrentContent())}</pre>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={0}>
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {codeString}
                        </SyntaxHighlighter>
                    </Paper>
                </Grid>

        </Grid>
        </Grid>
    );
}
