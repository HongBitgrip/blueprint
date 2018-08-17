Ext.define("com.coremedia.cap.content.results.PublicationResultCodes", function(PublicationResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the publish and withdraw operations.
 * An impediment is provided for a result item if it is documented in the result code definition.
 * /
[PublicApi]
public class PublicationResultCodes {
  /**
   * A document was not approved and could not be published.
   * /
  public static const DOCUMENT_NOT_APPROVED:String = "documentNotApproved";
  /**
   * A folder was not approved and could not be published.
   * /
  public static const FOLDER_NOT_APPROVED:String = "folderNotApproved";
  /**
   * A document was already published in the desired state.
   * /
  public static const DOCUMENT_UNCHANGED:String = "documentUnchanged";
  /**
   * A folder was already published in the desired state.
   * /
  public static const FOLDER_UNCHANGED:String = "folderUnchanged";
  /**
   * A document has been published in the desired state.
   * If the entire operation failed, this result code indicates that
   * the document could have been published and that the failure to
   * publish the document is not rooted in the document itself.
   * /
  public static const DOCUMENT_PUBLISHED:String = "documentPublished";
  /**
   * A folder has been published in the desired state.
   * If the entire operation failed, this result code indicates that
   * the folder could have been published and that the failure to
   * publish the folder is not rooted in the document itself.
   * /
  public static const FOLDER_PUBLISHED:String = "folderPublished";
  /**
   * A document has been deleted.
   * If the entire operation failed, this result code indicates that
   * the document could have been deleted and that the failure to
   * delete the document is not rooted in the document itself.
   * /
  public static const DOCUMENT_DELETED:String = "documentDeleted";
  /**
   * A folder has been deleted.
   * If the entire operation failed, this result code indicates that
   * the folder could have been deleted and that the failure to
   * delete the folder is not rooted in the document itself.
   * /
  public static const FOLDER_DELETED:String = "folderDeleted";
  /**
   * A document has been withdrawn.
   * If the entire operation failed, this result code indicates that
   * the document could have been withdrawn and that the failure to
   * withdraw the document is not rooted in the document itself.
   * /
  public static const DOCUMENT_WITHDRAWN:String = "documentWithdrawn";
  /**
   * A folder has been withdrawn.
   * If the entire operation failed, this result code indicates that
   * the folder could have been withdrawn and that the failure to
   * withdraw the folder is not rooted in the document itself.
   * /
  public static const FOLDER_WITHDRAWN:String = "folderWithdrawn";
  /**
   * A document was already published in a later version..
   * /
  public static const DOCUMENT_LATER_VERSION:String = "documentLaterVersion";
  /**
   * A document did no longer exist at the time of the publication.
   * /
  public static const DOCUMENT_DOES_NOT_EXIST:String = "documentDoesNotExist";
  /**
   * A folder did no longer exist at the time of the publication.
   * /
  public static const FOLDER_DOES_NOT_EXIST:String = "folderDoesNotExist";
  /**
   * A document has been withdrawn while being published in a new version.
   * /
  public static const DOCUMENT_CONCURRENTLY_WITHDRAWN:String = "documentConcurrentlyWithdrawn";
  /**
   * A document linked to another document, which was neither published nor approved.
   * /
  public static const LINKED_DOCUMENT_NOT_APPROVED:String = "linkedDocumentNotApproved";
  /**
   * A document has been deleted while being published in a new version.
   * /
  public static const DOCUMENT_CONCURRENTLY_DELETED:String = "documentConcurrentlyDeleted";
  /**
   * A document has been deleted while being published.
   * /
  public static const DOCUMENT_ALREADY_DELETED:String = "documentAlreadyDeleted";
  /**
   * A folder has been deleted while being published.
   * /
  public static const FOLDER_ALREADY_DELETED:String = "folderAlreadyDeleted";
  /**
   * A document could not be published, because it links to another document (the impediment)
   * that could not be published.
   * /
  public static const DOCUMENT_LINK_FAILED:String = "documentLinkFailed";
  /**
   * A document could not be published, because its parent folder (the impediment)
   * could not be published.
   * /
  public static const DOCUMENT_PARENT_FAILED:String = "documentParentFailed";
  /**
   * A folder could not be published, because its parent folder (the impediment)
   * could not be published.
   * /
  public static const FOLDER_PARENT_FAILED:String = "folderParentFailed";
  /**
   * A document could not be published, because another content (the impediment) is still
   * published with the same name and parent.
   * /
  public static const DOCUMENT_TARGET_NAME_CONFLICT:String = "documentTargetNameConflict";
  /**
   * A folder could not be published, because another content (the impediment) is still
   * published with the same name and parent.
   * /
  public static const FOLDER_TARGET_NAME_CONFLICT:String = "folderTargetNameConflict";
  /**
   * A document was renamed while being published.
   * /
  public static const DOCUMENT_CONCURRENTLY_RENAMED:String = "documentConcurrentlyRenamed";
  /**
   * A folder was renamed while being published.
   * /
  public static const FOLDER_CONCURRENTLY_RENAMED:String = "folderConcurrentlyRenamed";
  /**
   * While jointly approving and publishing, it was not permitted to approve a document.
   * /
  public static const DOCUMENT_NO_APPROVE_RIGHTS:String = "documentNoApproveRights";
  /**
   * While jointly approving and publishing, it was not permitted to approve a folder.
   * /
  public static const FOLDER_NO_APPROVE_RIGHTS:String = "folderNoApproveRights";
  /**
   * A document could not be published, because it was still marked to be withdrawn and the mark
   * could not be removed.
   * /
  public static const DOCUMENT_UNREMOVABLE_WITHDRAWAL:String = "documentUnremovableWithdrawal";
  /**
   * A folder could not be published, because it was still marked to be withdrawn and the mark
   * could not be removed.
   * /
  public static const FOLDER_UNREMOVABLE_WITHDRAWAL:String = "folderUnremovableWithdrawal";
  /**
   * It was not permitted to publish a document.
   * /
  public static const DOCUMENT_NO_RIGHTS:String = "documentNoRights";
  /**
   * It was not permitted to publish a folder..
   * /
  public static const FOLDER_NO_RIGHTS:String = "folderNoRights";
  /**
   * During a withdrawal, it was not permitted to mark a document to be withdrawn.
   * /
  public static const DOCUMENT_NO_WITHDRAW_RIGHTS:String = "documentNoWithdrawRights";
  /**
   * During a withdrawal, it was not permitted to mark a folder to be withdrawn.
   * /
  public static const FOLDER_NO_WITHDRAW_RIGHTS:String = "folderNoWithdrawRights";
  /**
   * A document could not be withdrawn, because another published document
   * (the impediment) still links to it.
   * /
  public static const DOCUMENT_KEEPS_LIVE_LINK:String = "documentKeepsLiveLink";
  /**
   * A document could not be published in the current state, because it is checked out
   * by another user and cannot be checked in.
   * /
  public static const DOCUMENT_CHECKED_OUT_BY_OTHER:String = "documentCheckedOutByOther";
  /**
   * A document could not be approved, because it has validation issues.
   * /
  public static const DOCUMENT_NOT_VALID:String = "documentNotValid";
  /**
   * A folder could not be approved, because it has validation issues.
   * /
  public static const FOLDER_NOT_VALID:String = "folderNotValid";
  /**
   * A document could not be published, because it is deleted.
   * /
  public static const DOCUMENT_IN_TRASH:String = "documentInTrash";
  /**
   * A folder could not be published, because it is deleted.
   * /
  public static const FOLDER_IN_TRASH:String = "folderInTrash";
  /**
   * A folder could not be withdrawn, because another content (the impediment) is still
   * published in this folder. Maybe the other contents have been moved after being published.
   * /
  public static const FOLDER_KEEPS_LIVE_CHILDREN:String = "folderKeepsLiveChildren";
  /**
   * A folder could not be deleted, because it still contains a child (the impediment)
   * that is not deleted at the same time..
   * /
  public static const FOLDER_KEEPS_CHILDREN:String = "folderKeepsChildren";
  /**
   * A folder could not be withdrawn, because it contains children that could not be marked to be withdrawn.
   * /
  public static const FOLDER_CANNOT_MARK_CHILD_TO_BE_WITHDRAWN:String = "folderCannotMarkChildToBeWithdrawn";
  /**
   * Another document linked to this document which is located another base folder in a multi-site repository.
   * Such links cannot be published.
   * /
  public static const LINKED_DOCUMENT_NOT_BELOW_BASE_FOLDER:String = "linkedDocumentNotBelowBaseFolder";
  /**
   * Content from many folders was supposed to be published, which is not allowed
   * in a multi-site repository.
   * /
  public static const PUBLICATION_SPANS_BASE_FOLDERS:String = "publicationSpansBaseFolders";
  /**
   * A document in the root folder could not be published, because the publication of such
   * document is not allowed in a multi-site repository.
   * /
  public static const DOCUMENT_IN_ROOT_FOLDER_UNPUBLISHABLE:String = "documentInRootFolderUnpublishable";
  /**
   * A content could not be published, because no publication target for this content was configured
   * in a multi-site repository.
   * /
  public static const UNCONFIGURED_PUBLICATION_TARGET:String = "unconfiguredPublicationTarget";
  /**
   * A publication was cancelled.
   * /
  public static const PUBLICATION_CANCELLED:String = "publicationCancelled";
  /**
   * An internal error occurred during the publication.
   * /
  public static const INTERNAL_ERROR:String = "internalError";
}*/function PublicationResultCodes$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: PublicationResultCodes$,
      statics: {
        DOCUMENT_NOT_APPROVED: "documentNotApproved",
        FOLDER_NOT_APPROVED: "folderNotApproved",
        DOCUMENT_UNCHANGED: "documentUnchanged",
        FOLDER_UNCHANGED: "folderUnchanged",
        DOCUMENT_PUBLISHED: "documentPublished",
        FOLDER_PUBLISHED: "folderPublished",
        DOCUMENT_DELETED: "documentDeleted",
        FOLDER_DELETED: "folderDeleted",
        DOCUMENT_WITHDRAWN: "documentWithdrawn",
        FOLDER_WITHDRAWN: "folderWithdrawn",
        DOCUMENT_LATER_VERSION: "documentLaterVersion",
        DOCUMENT_DOES_NOT_EXIST: "documentDoesNotExist",
        FOLDER_DOES_NOT_EXIST: "folderDoesNotExist",
        DOCUMENT_CONCURRENTLY_WITHDRAWN: "documentConcurrentlyWithdrawn",
        LINKED_DOCUMENT_NOT_APPROVED: "linkedDocumentNotApproved",
        DOCUMENT_CONCURRENTLY_DELETED: "documentConcurrentlyDeleted",
        DOCUMENT_ALREADY_DELETED: "documentAlreadyDeleted",
        FOLDER_ALREADY_DELETED: "folderAlreadyDeleted",
        DOCUMENT_LINK_FAILED: "documentLinkFailed",
        DOCUMENT_PARENT_FAILED: "documentParentFailed",
        FOLDER_PARENT_FAILED: "folderParentFailed",
        DOCUMENT_TARGET_NAME_CONFLICT: "documentTargetNameConflict",
        FOLDER_TARGET_NAME_CONFLICT: "folderTargetNameConflict",
        DOCUMENT_CONCURRENTLY_RENAMED: "documentConcurrentlyRenamed",
        FOLDER_CONCURRENTLY_RENAMED: "folderConcurrentlyRenamed",
        DOCUMENT_NO_APPROVE_RIGHTS: "documentNoApproveRights",
        FOLDER_NO_APPROVE_RIGHTS: "folderNoApproveRights",
        DOCUMENT_UNREMOVABLE_WITHDRAWAL: "documentUnremovableWithdrawal",
        FOLDER_UNREMOVABLE_WITHDRAWAL: "folderUnremovableWithdrawal",
        DOCUMENT_NO_RIGHTS: "documentNoRights",
        FOLDER_NO_RIGHTS: "folderNoRights",
        DOCUMENT_NO_WITHDRAW_RIGHTS: "documentNoWithdrawRights",
        FOLDER_NO_WITHDRAW_RIGHTS: "folderNoWithdrawRights",
        DOCUMENT_KEEPS_LIVE_LINK: "documentKeepsLiveLink",
        DOCUMENT_CHECKED_OUT_BY_OTHER: "documentCheckedOutByOther",
        DOCUMENT_NOT_VALID: "documentNotValid",
        FOLDER_NOT_VALID: "folderNotValid",
        DOCUMENT_IN_TRASH: "documentInTrash",
        FOLDER_IN_TRASH: "folderInTrash",
        FOLDER_KEEPS_LIVE_CHILDREN: "folderKeepsLiveChildren",
        FOLDER_KEEPS_CHILDREN: "folderKeepsChildren",
        FOLDER_CANNOT_MARK_CHILD_TO_BE_WITHDRAWN: "folderCannotMarkChildToBeWithdrawn",
        LINKED_DOCUMENT_NOT_BELOW_BASE_FOLDER: "linkedDocumentNotBelowBaseFolder",
        PUBLICATION_SPANS_BASE_FOLDERS: "publicationSpansBaseFolders",
        DOCUMENT_IN_ROOT_FOLDER_UNPUBLISHABLE: "documentInRootFolderUnpublishable",
        UNCONFIGURED_PUBLICATION_TARGET: "unconfiguredPublicationTarget",
        PUBLICATION_CANCELLED: "publicationCancelled",
        INTERNAL_ERROR: "internalError"
      }
    };
});
