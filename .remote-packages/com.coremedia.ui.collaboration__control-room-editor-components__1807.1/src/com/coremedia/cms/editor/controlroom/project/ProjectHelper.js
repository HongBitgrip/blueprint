Ext.define("com.coremedia.cms.editor.controlroom.project.ProjectHelper", function(ProjectHelper) {/*package com.coremedia.cms.editor.controlroom.project {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.controlroom.ProjectsPanel;
import com.coremedia.cms.editor.controlroom.controlRoomContext;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.TimeUtil;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.util.ConcurrentUtil;
import com.coremedia.ui.util.ExecuteEventually;

public class ProjectHelper {*/

  function ProjectHelper$() {
    // this is an utility class
  }/*

  public static*/ function openProjectInTab$static(project/*:Project*/)/*:void*/ {
    if (project) {
      com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().openTabForEntity(project);
    }
  }/*

  public static*/ function selectProjectsInMyProjects$static(project/*:Project*/)/*:void*/ {
    var projectsPanel/*:ProjectsPanel*/ = com.coremedia.cms.editor.controlroom.controlRoomContext.getProjectPanel(true, true);
    projectsPanel.setSelectedProjects([project]);
  }/*

  public static*/ function renameProjectInMyProjects$static(project/*:Project*/, openInTab/*:Boolean = true*/)/*:void*/ {if(arguments.length<=1)openInTab=true;
    var projectsPanel/*:ProjectsPanel*/ = com.coremedia.cms.editor.controlroom.controlRoomContext.getProjectPanel(true, true);
    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            function ()/*:Boolean*/ {
              com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(projectsPanel, "afterrender");
              return projectsPanel.rendered;
            },
            function ()/*:void*/ {
              projectsPanel && projectsPanel.startRenameProject(project, function ()/*:void*/ {
                if (openInTab) {
                  ProjectHelper.openProjectInTab(project);
                }
              });
            }
    );
  }/*

  /**
   * Load all contents for given projects. The function returns a content array synchronously.
   * However this array may be undefined if contents need to be determined asynchronously.
   *
   * If a callback is provided it will be called with the content array after
   * all contents were determined.
   *
   * @param projects the projects for which the contents are determined
   * @param callback the callback that is called with the projects' contents after all were determined
   * @return an array containing all projects' contents, may be undefined if some contents have to be determined asynchronously
   * /
  public static*/ function loadContents$static(projects/*:Array*/, callback/*:Function = null*/)/*:Array*/ {if(arguments.length<=1)callback=null;
    var allProjectContentsLoaded/*:Boolean*/ = projects.every(function (project/*:Project*/)/*:Boolean*/ {
      return project.getContents() !== undefined;
    });

    if (callback || !allProjectContentsLoaded) {
      var execEvt/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function ()/*:void*/ {
        callback && callback(ProjectHelper.getContents(projects));
      });

      projects.forEach(function (project/*:Project*/)/*:void*/ {
        execEvt.delay();
        project.getContents(function ()/*:void*/ {
          execEvt.proceed();
        });
      });

      execEvt.proceed();

      if (!allProjectContentsLoaded) {
        return undefined;
      }
    }

    return ProjectHelper.getContents(projects);
  }/*

  /**
   * Returns a set (=no duplicates) of all contents of the provided projects.
   *
   * @param projects
   * @return all contents of the provided projects
   * /
  public static*/ function getContents$static(projects/*:Array*/)/*:Array*/ {
    var contents/*:Array*/ = [];
    projects.forEach(function (project/*:Project*/)/*:void*/ {
      var projectContents/*:Array*/ = project.getContents();
      projectContents && projectContents.forEach(function (content/*:Content*/)/*:void*/ {
        if (contents.indexOf(content) === -1) {
          contents.push(content);
        }
      });
    });
    return contents;
  }/*

  /**
   * Compare Projects based on due date.
   * If no due date is defined, compare projects based on project name.
   *
   * @param p1 the first Project to compare
   * @param p2 the second Project to compare
   * @return whether the Projects have the same due dates or names
   * /
  public static*/ function compareProjects$static(p1/*:Project*/, p2/*:Project*/)/*:Number*/ {
    if (p1 === p2) {
      return 0;
    }

    if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(p1) || !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(p2)) {
      return undefined;
    }

    var dueDate1/*:Date*/ = p1.getDueDate();
    var dueDate2/*:Date*/ = p2.getDueDate();

    // if no due dates exist, compare by name
    if (!dueDate1 && !dueDate2) {
      var name1/*:String*/ = p1.getName().toLowerCase();
      var name2/*:String*/ = p2.getName().toLowerCase();
      return name1.localeCompare(name2);
    }

    return com.coremedia.cms.editor.sdk.util.TimeUtil.compareDates(dueDate1, dueDate2);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ProjectHelper$,
      statics: {
        openProjectInTab: openProjectInTab$static,
        selectProjectsInMyProjects: selectProjectsInMyProjects$static,
        renameProjectInMyProjects: renameProjectInMyProjects$static,
        loadContents: loadContents$static,
        getContents: getContents$static,
        compareProjects: compareProjects$static
      },
      requires: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.TimeUtil",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.ConcurrentUtil",
        "com.coremedia.ui.util.ExecuteEventually"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.controlRoomContext"]
    };
});
