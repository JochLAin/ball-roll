const { Project } = require('../../../models');
const config = require('../../config');

module.exports = {
    index() {
        return config.projects.map(project => {
            return project.serialize(false);
        });
    },
    create(props) {
        const project = new Project(props);
        config.projects.push(project);
    },
    update(uuid, props) {
        const project = config.projects.find(project => project.uuid === uuid);
        project.deserialize(props);
        return project.serialize();
    },
    delete(uuid) {
        const project = config.projects.find(project => project.uuid === uuid);
        if (!project) return null;
        config.projects.remove(project);
        return project.serialize();
    },
    read(uuid) {
        const project = config.projects.find(project => project.uuid === uuid);
        if (!project) return null;
        return project.serialize();
    }
};
