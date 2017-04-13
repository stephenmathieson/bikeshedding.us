import React from 'react'
import PropTypes from 'prop-types'
import { min as createSnippet } from '@segment/snippet'

const { SEGMENT_WRITE_KEY } = process.env

const HTML = ({ title, manifest, body }) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
      <link rel='stylesheet' href={manifest['bundle.css']} />
      <script dangerouslySetInnerHTML={{
        __html: createSnippet({
          apiKey: SEGMENT_WRITE_KEY,
          page: false
        })
      }} />
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: body }} />
      <script dangerouslySetInnerHTML={{ __html: `
        window.addEventListener('load', function () {
          var e = document.createElement('script')
          e.src = "/${manifest['bundle.js']}"
          document.body.appendChild(e)
        })
      ` }} />
    </body>
  </html>
)

HTML.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  manifest: PropTypes.object.isRequired
}

export default HTML
