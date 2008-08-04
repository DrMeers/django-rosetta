VERSION = (0, 4, 'pre2')

def get_version(svn=False):
    "Returns the version as a human-format string."
    v = '.'.join([str(i) for i in VERSION])
    if svn:
        from django.utils.version import get_svn_revision
        import os
        svn_rev = get_svn_revision(os.path.dirname(__file__))
        if svn_rev:
            v = '%s-%s' % (v, svn_rev)
    return v

# Number of messages to display per page.
MESSAGES_PER_PAGE = 10

