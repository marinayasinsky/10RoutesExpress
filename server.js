const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { createServerRenderer } = require('react-views');
const Template1 = require('./views/Template1.jsx');
const Template2 = require('./views/Template2.jsx');

const app = express();
const port = 3000;

// Home page
app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template1 title="Home" message="Welcome to our website!" />);
  res.send(content);
});

// Article list
app.get('/articles', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template1 title="Articles" message="Check out our latest articles." />);
  res.send(content);
});

// Individual article page
app.get('/articles/:id', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template2 title="Article" message={`Article ${req.params.id}`} />);
  res.send(content);
});

// News list
app.get('/news', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template1 title="News" message="Stay up-to-date with the latest news." />);
  res.send(content);
});

// Individual news page
app.get('/news/:id', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template2 title="News" message={`News item ${req.params.id}`} />);
  res.send(content);
});

// Category list
app.get('/categories', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template1 title="Categories" message="Browse articles by category." />);
  res.send(content);
});

// Individual category page
app.get('/categories/:id', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template2 title="Category" message={`Articles in ${req.params.id}`} />);
  res.send(content);
});

// Author list
app.get('/authors', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template1 title="Authors" message="Meet our talented writers." />);
  res.send(content);
});

// Individual author page
app.get('/authors/:id', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template2 title="Author" message={`Articles by ${req.params.id}`} />);
  res.send(content);
});

// Search page
app.get('/search', (req, res) => {
  const content = ReactDOMServer.renderToString(<Template1 title="Search" message="Find what you're looking for." />);
  res.send(content);
});

app.listen(3000, () => {
  console.log(`Connected to port ${port}`);
});
